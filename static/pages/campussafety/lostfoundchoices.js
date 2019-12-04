class LostFoundChoicePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title><center>CIRT</center></ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content padding>
        <ion-card padding>
          <ion-card-header>
            <center>
              <ion-icon
                src="https://cdn.glitch.com/c6fa28bb-32b6-4c20-9bd9-80eecf8bdc55%2Fcampus-safety.svg?v=1572915001905"
                size="large"
              ></ion-icon>
              <ion-card-title>Campus Safety</ion-card-title>
            </center>
          </ion-card-header>

          <h2>Lost & Found</h2>
          <ion-item>
            <ion-label>Report Lost Item</ion-label>
            <ion-nav-push component="page-lostform">
            <ion-radio slot="end" color="success"></ion-radio>
          </ion-item>
           <ion-item>
              <ion-label>Report Found Item</ion-label>
              <ion-nav-push component="page-foundform">
              <ion-radio slot="end" color="success"></ion-radio>
            </ion-item>
        </ion-card>

        <ion-footer>
          <ion-toolbar>     
            <ion-buttons slot="start">
              <ion-back-button default-href="safetyissues"></ion-back-button>
             </ion-buttons>
          </ion-toolbar>
        </ion-footer>
      </ion-content>    
    `;
  }
}

customElements.define("page-campussafety-lostfoundchoices", LostFoundChoicePage);