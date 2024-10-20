// Sample data with download URLs and download codes
const resources = [
    {
        title: "Maurice Odhiambo Omondi",
        type: "audio",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Aleng Lovine Achieng",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Buoro, Pamela Akoth",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Nyamudho, Christine Awino",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Ochieng, Calvince Ouma",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Ochieng, Wendy Akoth",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Oginga, Merceline Achieng",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Ojiwa, Jackline Achieng",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Opiyo, Naomi Akinyi",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Ondiaso, Vacons Achieng",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Onduso, Sharon Auma",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Onyango, Britone Odhiambo",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Onyango, Marion Adhiambo",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Onyango Reagan Omondi",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Oteno Elizabeth Atieno",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Oteno Lydia Akinyi",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Oteno Stanly Onyango",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Oteno Vivian Irene Akoth",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Ouma, Emmaculate Valary Atieno",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Ouma, Walter Okaka",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Owino, Alice Adhiambo",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Owino, Christopher Ouma",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Adhiambo, Jasmin Hezil",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Omondi Velma Atieno",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Okoth Maureen Adhiambo",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Oteno Kylean Omondi",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Onyango Ronny Otieno",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Oteno Dikson Opiyo",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Owino Joan Wairimu",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Oteno Shally Awino",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Ombok Dorothy Awino",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Ombok Millicent Atieno",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Agina Collins Oteno",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Elvis Omondi",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Vallary Atieno Ochieng",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Akatch Anne Martha",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Gorety Atieno",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Oteno Mitchel Lucy Achieng",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Duke Odhiambo Siwa",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Evaline Awuor",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "George Ochieng",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Oteno Asley Sheryl",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "Zeddy Omondi",
        type: "document",
        category: "Grade 8",
        size: "2.5 MB",
        date: "2024-03-15",
        icon: "file-text",
        urls: [
            "./Docs/Revised Learning Areas.pdf", 
            "https://example.com/physics_intro.pdf"
        ],
        downloadCode: "call"
    },
    {
        title: "History Notes Chapter 5",
        type: "document",
        category: "History",
        size: "1.8 MB",
        date: "2024-03-14",
        icon: "file-text",
        urls: [
            "https://example.com/history_notes_chapter_5.pdf", 
            "https://example.com/history_notes_chapter_4.pdf"
        ],
        downloadCode: "HIST2024"
    },
    {
        title: "Math Tutorial Video",
        type: "video",
        category: "Mathematics",
        size: "150 MB",
        date: "2024-03-13",
        icon: "video",
        urls: [
            "https://example.com/math_tutorial_video.mp4"
        ],
        downloadCode: "MATH2024"
    }
];