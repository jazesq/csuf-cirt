class AddLightingPage extends HTMLElement {
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

          <h2>Request for Additional Lighting</h2>
      Please provide a brief description of the location where more safety lighting is needed.
        </ion-card>
          
          <ion-item>
                <ion-label position="stacked">
                Description <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="text"
                  oninput="handleDescription(event)"
                ></ion-input>
              </ion-item>

            <ion-item>
              <ion-label position="stacked">Date<ion-text color="danger">*</ion-text></ion-label>
              <ion-datetime placeholder="Date noticed"></ion-datetime>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Time<ion-text color="danger">*</ion-text></ion-label>
              <ion-datetime placeholder="Time noticed" display-format="h:mm A" picker-format="h:mm A"></ion-datetime>
            </ion-item>

          <ion-item>
                <ion-label position="stacked">
                Additional Comments <ion-text color="medium">(optional)</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="text"
                  oninput="handleComment(event)"
                ></ion-input>
              </ion-item>

           <ion-button 
            color="primary" 
            expand="block" 
            [disabled]="!LightingForm.valid" 
            (click)="submitLightingForm()">Submit
          </ion-button>

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

customElements.define("page-campussafety-addlightingform", AddLightingPage);