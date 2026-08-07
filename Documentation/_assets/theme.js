(function () {
    var STORAGE_KEY = 'genesis-doc-theme';

    function preferredTheme() {
        var stored = window.localStorage ? localStorage.getItem(STORAGE_KEY) : null;
        if (stored === 'dark' || stored === 'light')
            return stored;

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)
            return 'light';

        return 'dark';
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);

        var label = document.querySelector('[data-genesis-theme-label]');
        if (label)
            label.textContent = theme === 'light' ? 'Light' : 'Dark';

        var toggle = document.querySelector('[data-genesis-theme-toggle]');
        if (toggle)
            toggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
    }

    function toggleTheme() {
        var current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        var next = current === 'light' ? 'dark' : 'light';
        if (window.localStorage)
            localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
    }

    document.addEventListener('DOMContentLoaded', function () {
        applyTheme(preferredTheme());

        var toggle = document.querySelector('[data-genesis-theme-toggle]');
        if (toggle) {
            toggle.addEventListener('click', toggleTheme);
        }
    });
})();