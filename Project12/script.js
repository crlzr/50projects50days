const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        // Remove 'active' from all FAQs to show only one at a time
        document.querySelectorAll('.faq').forEach(faq => faq.classList.remove('active'));
        // Toggle 'active' on the clicked FAQ
        toggle.parentNode.classList.toggle('active');
    });
});

