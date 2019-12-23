class DoorSecurePage extends HTMLElement {
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

          <h2>Request for Door Secure</h2>
          </ion-card>

            <form action="/submit" method="POST">
            <div class="form-group">
              <ion-list lines="full" class="ion-no-margin ion-no-padding">
                <ion-item>
                  <ion-label position="stacked">
                    First Name <ion-text color="danger">*</ion-text>
                  </ion-label>
                  <ion-input
                    required
                    type="text"
                    name="fName"
                  ></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label position="stacked">
                    Last Name <ion-text color="danger">*</ion-text>
                  </ion-label>
                  <ion-input
                    required
                    type="text"
                    name="lName"
                  ></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label position="stacked">
                    CWID <ion-text color="danger">*</ion-text>
                  </ion-label>
                  <ion-input
                    required
                    type="number"
                    name="iD"
                  ></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label position="stacked">
                    Phone Number <ion-text color="danger">*</ion-text>
                  </ion-label>
                  <ion-input
                    required
                    type="tel"
                    name="pNum"
                  ></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label position="stacked">
                    Email <ion-text color="danger">*</ion-text>
                  </ion-label>
                  <ion-input
                    required
                    type="email"
                    name="eMail"
                  ></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label position="stacked">
                    Building Name<ion-text color="danger">*</ion-text>
                  </ion-label>
                  <ion-input
                    required
                    type="text"
                    name="location"
                  </ion-item>

                <ion-item>
                  <ion-label position="stacked">
                    Room Number(s) <ion-text color="danger">*</ion-text>
                  </ion-label>
                  <ion-input
                    required
                    type="number"
                    name="roomNum"
                  ></ion-input>
                </ion-item>

              <ion-item>
                  <ion-label position="stacked">
                    Additional Comments <ion-text color="medium">(optional)</ion-text>
                  </ion-label>
                  <ion-input
                    type="text"
                    name="addComments"
                  ></ion-input>
                </ion-item>
            </div>

          <ion-nav-push component="page-campussafety-confirmation">
            <ion-button 
              color="primary" 
              expand="block"
              type="submit"
              >Submit</ion-button>
          </ion-nav-push>
        </form>
</br>
<b><center><em>In case of emergency, call <a href="tel:911">911</a></em></center></b>
</br>

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

customElements.define("page-campussafety-doorsecureform", DoorSecurePage);
