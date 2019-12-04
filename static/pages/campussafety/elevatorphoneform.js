class ElevatorPhoneFormPage extends HTMLElement {
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

          <h2>Report Broken Elevator Phone</h2>
          <form onsubmit="processElevatorPhoneForm(event)">
            <ion-list lines="full" class="ion-no-margin ion-no-padding">
              <ion-item>
                <ion-label position="stacked">
                  First Name <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="text"
                  oninput="handleFirstNameValue(event)"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">
                  Last Name <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="text"
                  oninput="handleLastNameValue(event)"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">
                  CWID <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="number"
                  oninput="handleCWIDValue(event)"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">
                  Phone Number <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="tel"
                  oninput="handlePhoneNumValue(event)"
                ></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="stacked">
                  Email <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="email"
                  oninput="handleEmail(event)"
                ></ion-input>
              </ion-item>
              
                <ion-item>
                <ion-label position="stacked">
                  Name of Building or Parking Structure<ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="text"
                  oninput="handleBuilding(event)"></ion-input>
                </ion-item>

                <ion-item>
                <ion-label position="stacked">
                  Elevator Number <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                  required
                  type="text"
                  oninput="handleElevatorNum(event)"
                ></ion-input>
              </ion-item>


        <ion-list>
          <ion-list-header><ion-label position="stacked">
              Select all issues that apply:<ion-text color="danger">*</ion-text>
            </ion-label></ion-list-header>
          <ion-item>
            <ion-checkbox color="medium" slot="start"></ion-checkbox>
            <ion-label>I cannot hear dispatch</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="medium" slot="start"></ion-checkbox>
            <ion-label>Dispatch cannot hear me</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="medium" slot="start"></ion-checkbox>
            <ion-label>Phone does not dial dispatch</ion-label>
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
            [disabled]="!ElevatorPhoneForm.valid" 
            (click)="submitElevatorPhoneForm()">Submit
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

customElements.define("page-campussafety-elevatorphoneform", ElevatorPhoneFormPage);