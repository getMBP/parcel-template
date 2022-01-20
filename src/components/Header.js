const Header = () => {

    const template = `
    <header>
    <nav>
    <ul>
        <li><a href="#">Primary nav</a></li>
        <li><a href="#">Primary nav</a></li>
        <li><a href="#">Primary nav</a></li>
        <li><a href="#">Primary nav</a></li>
    </ul>
</nav>
<form role="search" aria-label="site">
    <label>
    <span>Search</span>
    <input type="search"/>
  </label>
    <button type="submit">Submit</button>
</form>
    </header>
    `;
    return template;
}


export default Header;

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
});

// Here is the next part of the headersssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss