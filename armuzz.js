// ===== 1. DATA ASLI DARI MYBIO.HTML (PAKE SVG) =====
const links = [
    {
        id: 1,
        title: "Website Portofolio Utama",
        url: "https://armuzzdev.infinityfreeapp.com/",
        category: "project",
        hoverRing: "hover:ring-amber-300",
        hoverText: "group-hover:text-amber-500",
        svgIcon: `<svg class="h-6 w-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`
    },
    {
        id: 2,
        title: "Gaming My Project Vibe Code",
        url: "https://sawit3d.ai.studio/",
        category: "project",
        hoverRing: "hover:ring-violet-300",
        hoverText: "group-hover:text-violet-500",
        svgIcon: `<svg class="h-6 w-6 text-violet-600 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H9v2H7v-2H5v-2h2V9h2v2h2v2zm4.5 1c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`
    },
    {
        id: 3,
        title: "Proyek Unggulan Github",
        url: "https://github.com/aryamusthofa/pdftranslatorflutter-latihan",
        category: "project",
        hoverRing: "hover:ring-amber-300",
        hoverText: "group-hover:text-amber-500",
        svgIcon: `<svg class="h-6 w-6 text-slate-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`
    },
    {
        id: 4,
        title: "Catatan Kursus Web 101 Tailwind",
        url: "https://universal-magpie-c9c.notion.site/Web-101-Build-Your-Own-Link-in-Bio-3ef2eddec75280b9878bfc6368b08376",
        category: "catatan",
        hoverRing: "hover:ring-amber-300",
        hoverText: "group-hover:text-amber-500",
        svgIcon: `<svg class="h-6 w-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`
    },
    {
        id: 5,
        title: "Hubungi via Email",
        url: "mailto:armuzzbrotherdev@gmail.com",
        category: "kontak",
        hoverRing: "hover:ring-amber-300",
        hoverText: "group-hover:text-amber-500",
        svgIcon: `<svg class="h-6 w-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
    },
    {
        id: 6,
        title: "Donate to Support Me",
        url: "https://tako.id/aryamusthofa",
        category: "kontak",
        hoverRing: "hover:ring-amber-300",
        hoverText: "group-hover:text-amber-500",
        svgIcon: `<svg class="h-5 w-5 fill-current text-slate-700" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
    }
];

// ===== 3. RENDER LOGIC =====
function renderLinks(category = "semua") {
    if (!linkList) return;
    linkList.innerHTML = "";

    links.forEach(link => {
        // Filter: tampilkan jika kategori 'semua' atau kategorinya cocok
        if (category === "semua" || link.category === category) {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = link.url;
            if (link.url.startsWith("http")) {
                a.target = "_blank";
                a.rel = "noopener noreferrer";
            }

            a.className = `group flex items-center justify-between rounded-xl bg-white px-5 py-4 font-medium text-slate-800 shadow-sm ring-1 ring-slate-200/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md ${link.hoverRing} focus:outline-none focus:ring-2 focus:ring-amber-400`;

            a.innerHTML = `
                <span class="flex items-center gap-3">
                    <span class="flex h-6 w-6 items-center justify-center">${link.svgIcon}</span>
                    <span>${link.title}</span>
                </span>
                <svg class="h-5 w-5 text-slate-400 transition-transform duration-200 group-hover:translate-x-1 ${link.hoverText}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            `;

            li.appendChild(a);
            linkList.appendChild(li);
        }
    });
}

// ===== 2. FUNGSI PABRIK ITEM LINK (DOM BUILDER) =====
function createLinkItem(link) {
    const item = document.createElement("li");
    const anchor = document.createElement("a");

    anchor.href = link.url;
    anchor.className = `group flex items-center justify-between rounded-xl bg-white px-5 py-4 font-medium text-slate-800 shadow-sm ring-1 ring-slate-200/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md ${link.hoverRing} focus:outline-none focus:ring-2 focus:ring-amber-400`;

    // Cek jika buka tab baru (http/https saja)
    if (link.url.startsWith("http")) {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
    }

    // SVG panah kanan (kanan kartu)
    const arrowSvg = `
        <svg class="h-5 w-5 text-slate-400 transition-transform duration-200 group-hover:translate-x-1 ${link.hoverText}"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    `;

    // Rakit isi dalam anchor (Icon SVG + Title & Arrow SVG)
    anchor.innerHTML = `
        <span class="flex items-center gap-3">
            <span class="flex h-6 w-6 items-center justify-center">${link.svgIcon}</span>
            <span>${link.title}</span>
        </span>
        ${arrowSvg}
    `;

    item.appendChild(anchor);
    return item; // Selesai rakit 1 li
}

// ===== 3. SELEKSI ELEMEN & LOGIKA RENDER =====
const linkList = document.querySelector("#link-list");

function renderLinks(category) {
    if (!linkList) return; // Mencegah error jika wadah belum ada
    linkList.innerHTML = ""; // Bersihin isi lama

    links.forEach(function (link) {
        if (category === "semua" || link.category === category) {
            linkList.appendChild(createLinkItem(link));
        }
    });
}

// ===== 4. JALANKAN PERTAMA KALI =====
renderLinks("semua");