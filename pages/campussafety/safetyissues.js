class SafetyIssuesPage extends HTMLElement {
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

          <h2>What's the issue?</h2>
          <ion-list>
            <ion-radio-group>              

              <ion-item>
                <ion-label>Request a Safety Escort</ion-label>
                  <ion-nav-push component="page-campussafety-safetyescortform">
                  <ion-radio slot="end" color="success"></ion-radio>
              </ion-item>

              <ion-item>
                 <ion-label>Broken Bluephone</ion-label>
                  <ion-nav-push component="page-campussafety-bluephoneform">
                  <ion-radio slot="end" color="success"></ion-radio>
              </ion-item>
              
               <ion-item>
                 <ion-label>Broken Elevator Phone</ion-label>
                  <ion-nav-push component="page-campussafety-elevatorphoneform">
                  <ion-radio slot="end" color="success"></ion-radio>
              </ion-item>

              <ion-item>
                <ion-label>Request Additional Lighting</ion-label>
                  <ion-nav-push component="page-campussafety-addlightingform">
                  <ion-radio slot="end" color="success"></ion-radio>
              </ion-item>

               <ion-item>
                <ion-label>Lost & Found</ion-label>
                  <ion-nav-push component="page-campussafety-lostfoundchoices">
                  <ion-radio slot="end" color="success"></ion-radio>
              </ion-item>
            
              <ion-item>
                <ion-label>Request Door Unlock</ion-label>
                  <ion-nav-push component="page-campussafety-doorunlockform">
                  <ion-radio slot="end" color="success"></ion-radio>
              </ion-item>

              <ion-item>
                <ion-label>Request Door Secure</ion-label>
                  <ion-nav-push component="page-campussafety-doorsecureform">
                  <ion-radio slot="end" color="success"></ion-radio>
              </ion-item>

              <ion-item>
                <ion-label>Request Event Security</ion-label>
                  <ion-nav-push component="page-campussafety-eventsecurityform">
                  <ion-radio slot="end" color="success">
                  </ion-radio>
              </ion-item>

              <ion-item>
                <ion-label>Provide Feedback</ion-label>
                  <ion-nav-push component="page-campussafety-feedbackform">
                  <ion-radio slot="end" color="success"></ion-radio>
              </ion-item>
            </ion-radio-group>
          </ion-list>

          <p><center><em>In case of emergency, call <a href="tel:911">911</a></em></center></p>
            
        </ion-card>

        <ion-footer>
          <ion-toolbar>     
            <ion-buttons slot="start">
              <ion-back-button default-href="departments"></ion-back-button>
             </ion-buttons>
          </ion-toolbar>
        </ion-footer>

      </ion-content>
    `;
  }
}

customElements.define("page-campussafety-safetyissues", SafetyIssuesPage);
