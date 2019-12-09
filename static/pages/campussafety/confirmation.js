class ConfirmationPage extends HTMLElement {
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

<h2>Confirmation Page</h2> 
         Your request has been successfully submitted. Thank you for helping ensure campus safety!
        </ion-card>


</br>
<b><center><em>In case of emergency, call <a href="tel:911">911</a></em></center></b>
</br>

            </ion-list>
          </form>
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

customElements.define("page-campussafety-confirmation", ConfirmationPage);
