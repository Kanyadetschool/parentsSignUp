// Initialize Feather Icons
feather.replace();


// Create alert container
const alertContainer = document.createElement('div');
alertContainer.style.position = 'fixed';
alertContainer.style.top = '1rem';
alertContainer.style.right = '1rem';
alertContainer.style.zIndex = '50';
document.body.appendChild(alertContainer);

// Function to show alert
function showAlert(message, variant = 'error') {
    const alertHTML = `
        <div class="fixed top-4 right-4 flex w-[360px] animate-in fade-in-0 zoom-in-95">
            <div class="relative w-full rounded-lg border ${variant === 'error' ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'} p-4 shadow-lg">
                <div class="flex items-start gap-4">
                    <div class="mt-1">
                        ${variant === 'error' ? 
                            '<i data-feather="x-circle" class="h-5 w-5 text-red-500"></i>' :
                            '<i data-feather="check-circle" class="h-5 w-5 text-green-500"></i>'
                        }
                    </div>
                    <div class="flex-1">
                        <h5 class="mb-1 font-medium leading-none tracking-tight ${variant === 'error' ? 'text-red-900' : 'text-green-900'}">
                            ${variant === 'error' ? 'Error' : 'Success'}
                        </h5>
                        <p class="text-sm ${variant === 'error' ? 'text-red-700' : 'text-green-700'}">${message}</p>
                    </div>
                    <button class="${variant === 'error' ? 'text-red-500 hover:text-red-700' : 'text-green-500 hover:text-green-700'}" onclick="this.closest('.fixed').remove()">
                        <i data-feather="x" class="h-4 w-4"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    alertContainer.insertAdjacentHTML('beforeend', alertHTML);
    feather.replace();
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        const alerts = alertContainer.children;
        if (alerts.length > 0) {
            alerts[0].remove();
        }
    }, 5000);
}

// Function to create resource cards
function createResourceCard(resource) {
    return `
        <div class="resource-card bg-white rounded-lg shadow p-6 transition-all duration-300 hover:shadow-lg">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-lg font-semibold text-gray-900">${resource.title}</h3>
                <i data-feather="${resource.icon}" class="text-gray-500"></i>
            </div>
            <div class="space-y-3">
                <div class="flex justify-between items-center">
                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        ${resource.category}
                    </span>
                    <span class="text-sm text-gray-500">${resource.size}</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500">${resource.date}</span>
                    <button class="download-btn flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200" 
                            data-title="${resource.title}" 
                            data-code="${resource.downloadCode}">
                        <i data-feather="download" class="w-4 h-4"></i>
                        Download
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to create resource cards
function createResourceCard(resource) {
    return `
        <div class="resource-card bg-white rounded-lg shadow p-6 transition-all duration-300 hover:shadow-lg">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-lg font-semibold text-gray-900">${resource.title}</h3>
                <i data-feather="${resource.icon}" class="text-gray-500"></i>
            </div>
            <div class="space-y-3">
                <div class="flex justify-between items-center">
                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        ${resource.category}
                    </span>
                    <span class="text-sm text-gray-500">${resource.size}</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500">${resource.date}</span>
                    <button class="download-btn flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200" 
                            data-title="${resource.title}" 
                            data-code="${resource.downloadCode}">
                        <i data-feather="download" class="w-4 h-4"></i>
                        Download
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to render resources
function renderResources(resources) {
    const grid = document.getElementById('resources-grid');
    grid.innerHTML = resources.map(resource => createResourceCard(resource)).join('');
    feather.replace();

    // Re-attach download button functionality
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const title = btn.getAttribute('data-title');
            const downloadCode = btn.getAttribute('data-code');

            // Replace prompt with SweetAlert for download code
            const { value: userCode } = await Swal.fire({
                title: `Enter the download code for ${title}:`,
                input: 'text',
                inputPlaceholder: 'Download Code',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                cancelButtonText: 'Cancel',
                inputValidator: (value) => {
                    if (!value) {
                        return 'You need to enter a code!';
                    }
                }
            });

            // Check if the entered code is correct
            if (userCode !== downloadCode) {
                showAlert("Incorrect download code. Access denied.", "error");
                return;
            }

            // Show success message
            showAlert("Download code accepted! Starting download...", "success");

            // Find the selected resource by title
            const selectedResource = resources.find(resource => resource.title === title);

            // Populate the modal with URLs for the selected resource
            const modalList = document.getElementById('url-list');
            modalList.innerHTML = '';

            // Create the "Select All" checkbox
            const selectAllItem = document.createElement('li');
            selectAllItem.innerHTML = `
                <label class="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                    <input type="checkbox" id="select-all" class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">Select All</span>
                </label>
            `;
            modalList.appendChild(selectAllItem);

            selectedResource.urls.forEach(url => {
                const listItem = document.createElement('li');
                listItem.className = 'url-item';
                listItem.innerHTML = `
                    <label class="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                        <input type="checkbox" class="url-checkbox rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" 
                               data-url="${url}">
                        <span class="text-gray-700">Download ${url.split('/').pop()}</span>
                    </label>
                `;
                modalList.appendChild(listItem);
            });

            // Show the modal
            const modal = document.getElementById('download-modal');
            modal.style.display = 'flex';

            // Handle download for selected files
            const downloadSelectedBtn = modal.querySelector('.download-selected-btn');
            downloadSelectedBtn.onclick = async () => {
                const selectedCheckboxes = modal.querySelectorAll('.url-checkbox:checked');

                if (selectedCheckboxes.length === 0) {
                    showAlert("Please select at least one file to download.", "error");
                    return;
                }

                const downloadUrls = Array.from(selectedCheckboxes).map(checkbox => checkbox.getAttribute('data-url'));

                for (const url of downloadUrls) {
                    const filename = url.split('/').pop();
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = filename;
                    a.click();
                }

                modal.style.display = 'none';
                showAlert(`Starting download for ${downloadUrls.length} file(s)...`, "success");
            };

            // Cancel button functionality
            const cancelBtn = modal.querySelector('.cancel-btn');
            cancelBtn.onclick = () => {
                modal.style.display = 'none';
            };

            // "Select All" checkbox functionality
            const selectAllCheckbox = modal.querySelector('#select-all');
            selectAllCheckbox.onclick = () => {
                const checkboxes = modal.querySelectorAll('.url-checkbox');
                checkboxes.forEach(checkbox => {
                    checkbox.checked = selectAllCheckbox.checked;
                });
            };

            // Close modal when clicking outside
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    });
}

// Initial render
renderResources(resources);

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredResources = resources.filter(resource => 
        resource.title.toLowerCase().includes(searchTerm) ||
        resource.category.toLowerCase().includes(searchTerm)
    );
    renderResources(filteredResources);
});

// Category filter functionality
document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        // Remove active class from all pills
        document.querySelectorAll('.category-pill').forEach(p => 
            p.classList.remove('active', 'bg-indigo-600', 'text-white'));
        
        // Add active class to clicked pill
        pill.classList.add('active', 'bg-indigo-600', 'text-white');

        const category = pill.textContent.trim().toLowerCase();
        let filteredResources = resources;

        if (category !== 'all') {
            filteredResources = resources.filter(resource => {
                if (category === 'documents') {
                    return resource.type === 'document';
                } else if (category === 'videos') {
                    return resource.type === 'video';
                } else if (category === 'audio') {
                    return resource.type === 'audio';
                }
                return true;
            });
        }

        renderResources(filteredResources);
    });
});
