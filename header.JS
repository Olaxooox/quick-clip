// header.js - QuickClip header component
// Include this file right after <div id="app-header"></div> in quickclip.html.
// It replaces the placeholder with the header markup.
// Uses onclick="toggleDarkMode()", which is defined in quickclip.html.
(function () {
  const mount = document.getElementById('app-header');
  if (!mount) return;
  mount.outerHTML = `
  <header class="px-6 py-4 border-b border-slate-200 dark:border-neutral-900 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md sticky top-0 z-40 transition-colors duration-300">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <div class="flex items-center gap-2.5">
        <div class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
        <h1 class="text-base font-medium tracking-tight text-neutral-900 dark:text-neutral-200">
          QuickClip
        </h1>
      </div>

      <div class="flex items-center gap-3">
        <!-- Room ID Badge -->
        <span id="roomBadge" class="text-xs font-mono bg-slate-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-slate-200 dark:border-neutral-800 px-3 py-1 rounded-full">
          ID: ...
        </span>

        <!-- Dark / Light Mode Toggle Button -->
        <button
          onclick="toggleDarkMode()"
          id="themeToggleBtn"
          class="p-1.5 rounded-full bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center text-sm"
          title="Toggle Dark Mode"
        >
          <span id="themeIcon">🌙</span>
        </button>
      </div>
    </div>
  </header>
  `;
})();
