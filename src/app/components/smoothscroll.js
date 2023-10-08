export default function smoothScroll(targetId) {
    const target = document.getElementById(targetId);

    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth', // This enables smooth scrolling
        });
    }
}