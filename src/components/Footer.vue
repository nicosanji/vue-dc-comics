<template>
  <footer>
    <div class="container bg-primary">
      <div class="row">
        <div class="col">
          <img
            src="../assets/img/buy-comics-digital-comics.png"
            alt="digital comics"
          />
          <span>DIGITAL COMICS</span>
        </div>
        <div class="col">
          <img
            src="../assets/img/buy-comics-merchandise.png"
            alt="merchandise"
          />
          <span>DC MERCHANDISE</span>
        </div>
        <div class="col">
          <img
            src="../assets/img/buy-comics-subscriptions.png"
            alt="subscription"
          />
          <span>SUBSCRIPTION</span>
        </div>
        <div class="col">
          <img
            src="../assets/img/buy-comics-shop-locator.png"
            alt="shop locator"
          />
          <span>COMIC SHOP LOCATOR</span>
        </div>
        <div class="col">
          <img
            src="../assets/img/buy-dc-power-visa.svg"
            alt="subscription"
            id="visa-img"
          />
          <span>DC POWER VISA</span>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="container">
        <div class="link-footer-container">
          <div class="col-link">
            <h2>DC COMICS</h2>
            <ul>
              <li v-for="(element, i) in dcComicsLinks" :key="i">
                <a href="element.href">{{ element.txt }}</a>
              </li>
            </ul>

            <h2>SHOP</h2>
            <ul>
              <li v-for="(element, i) in shopLinks" :key="i">
                <a href="element.href">{{ element.txt }}</a>
              </li>
            </ul>
          </div>

          <div class="col-link">
            <h2>DC</h2>
            <ul>
              <li v-for="(element, i) in dcLinks" :key="i">
                <a href="element.href">{{ element.txt }}</a>
              </li>
            </ul>
          </div>

          <div class="col-link">
            <h2>SITES</h2>
            <ul>
              <li v-for="(element, i) in sitesLinks" :key="i">
                <a href="element.href">{{ element.txt }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="img-footer-container">
          <img src="../assets/img/dc-logo-bg.png" alt="footer's logo" />
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="btn-container">
        <div class="container">
          <button class="btn">SIGN-UP NOW!</button>

          <div class="social-container">
            <span>FOLLOW US</span>
            <a href="#"
              ><img src="../assets/img/footer-facebook.png" alt="fb logo"
            /></a>
            <a href="#"
              ><img src="../assets/img/footer-twitter.png" alt="twitter logo"
            /></a>
            <a href="#"
              ><img src="../assets/img/footer-youtube.png" alt="youtube logo"
            /></a>
            <a href="#"
              ><img
                src="../assets/img/footer-pinterest.png"
                alt="pinterest logo"
            /></a>
            <a href="#"
              ><img src="../assets/img/footer-periscope.png" alt="fb logo"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      dcComicsLinks: [
        {
          txt: "Characters",
          href: "#",
        },
        {
          txt: "Comics",
          href: "#",
        },
        {
          txt: "Movies",
          href: "#",
        },
        {
          txt: "TV",
          href: "#",
        },
        {
          txt: "Games",
          href: "#",
        },
        {
          txt: "Videos",
          href: "#",
        },
        {
          txt: "News",
          href: "#",
        },
      ],

      dcLinks: [
        {
          txt: "Terms Of Use",
          href: "#",
        },
        {
          txt: "Privacy policy (new)",
          href: "#",
        },
        {
          txt: "Ad Choices",
          href: "#",
        },
        {
          txt: "Advertising",
          href: "#",
        },
        {
          txt: "Jobs",
          href: "#",
        },
        {
          txt: "Subscriptions",
          href: "#",
        },
        {
          txt: "Talent Workshops",
          href: "#",
        },
        {
          txt: "CPSC Certificates",
          href: "#",
        },
        {
          txt: "Ratings",
          href: "#",
        },
        {
          txt: "Shop Help",
          href: "#",
        },
        {
          txt: "Contact Us",
          href: "#",
        },
      ],

      sitesLinks: [
        {
          txt: "DC",
          href: "#",
        },
        {
          txt: "MAD Magazine",
          href: "#",
        },
        {
          txt: "DC Kids",
          href: "#",
        },
        {
          txt: "DC Universe",
          href: "#",
        },
        {
          txt: "DC Power Visa",
          href: "#",
        },
      ],

      shopLinks: [
        {
          txt: "Shop DC",
          href: "#",
        },
        {
          txt: "Shop DC Collectibles",
          href: "#",
        },
      ],
    };
  },
};
</script>

<style></style>
