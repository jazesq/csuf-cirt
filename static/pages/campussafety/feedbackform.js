class FeedbackChoicesPage extends HTMLElement {
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

          <h2>Provide Feedback</h2>
           We are constantly looking for ways to improve campus safety. Your feedback helps us know what we are doing right or what can be improved. All feedback is anonymous. Thank you for helping us ensure a safe campus community!
        </ion-card>
    
        <form action="/submit" method="POST">
            <div class="form-group">
            <ion-item>
                <ion-label position="stacked">
                  Feedback <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="text"
                  name="feedback"
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

customElements.define("page-campussafety-feedbackform", FeedbackChoicesPage);
