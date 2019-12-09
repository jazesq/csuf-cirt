class SafetyEscortPage extends HTMLElement {
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

          <h2>Request a Safety Escort</h2> 
          Safety escorts are provided 24/7 to all students, faculty, and staff. Safety escorts are strictly limited to campus locations (this includes Titan Hall, College Park, and Lot S). Off-campus escorts are not provided. If you are waiting in a parked vehicle, please leave your hazard lights on until the officer arrives. ETAs will depend on call volume.
        </ion-card>

          <h2>Submit a report</h2>
          <form action ="/submit" method = "POST">
          <div class = "form-group"> 
            <ion-list lines="full" class="ion-no-margin ion-no-padding">
              <ion-item>
                <ion-label position="stacked">
                  First Name <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="text"
                  name = "fName"
                  
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">
                  Last Name <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="text"
                  name = "lName"
                  
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">
                  CWID <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="number"
                  name = "iD"
                  
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">
                  Phone Number <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="tel"
                  name = "pNum"
                 
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">
                  Email <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="email"
                  name = "eMail"
                  
                ></ion-input>
              </ion-item>
              
              <ion-item>
                <ion-label position="stacked">
                  Brief description of what you are wearing <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="text"
                  name = "descClothes"
                  
                ></ion-input>
              </ion-item>
          
              <ion-item>
                <ion-label position="stacked">
                  Party Size <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="number"
                  name = "partySize"
                  
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">
                  Your current location <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="text"
                  name = "currentLoc"
                  
                ></ion-input>
              </ion-item>

            <ion-item>
                <ion-label position="stacked">
                  Destination <ion-text color="danger">*</ion-text>
                </ion-label>
                
                
					<ion-input
					required
					type="text"
					name = "destination"
                
					></ion-input>
					
					
              </ion-item>
              </div>

            <ion-button 
              color="primary" 
              expand="block" 
              type="submit">Submit
            </ion-button>

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

customElements.define("page-campussafety-safetyescortform", SafetyEscortPage);
