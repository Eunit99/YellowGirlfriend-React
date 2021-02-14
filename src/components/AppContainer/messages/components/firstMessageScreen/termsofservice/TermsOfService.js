import React, { Component } from 'react';

class TermsOfService extends Component {

  render() {
    let cookiesAccept = this.props.cookiesAccept;

    return (
      <div className="terms-of-service-container">
        <div className="small-into">Terms of Service</div>
        <p>
          
          loremIncididunt enim laborum occaecat velit cillum. Laborum commodo tempor aliquip officia pariatur proident laboris culpa fugiat voluptate. Dolore laboris mollit mollit nostrud commodo est labore irure eu duis ullamco. Nostrud Lorem occaecat occaecat nulla ipsum officia consequat aliqua minim. In sunt fugiat anim excepteur laborum veniam amet. Culpa do et anim elit ea ipsum. Minim Lorem ipsum deserunt labore duis mollit anim nisi veniam proident qui duis.

          Proident laborum Lorem incididunt duis ea id quis veniam quis ad tempor duis aute. Ad dolore eiusmod cupidatat excepteur ullamco sint ipsum id deserunt qui irure cupidatat culpa magna. Ullamco enim est duis ea cupidatat elit quis commodo. Deserunt labore qui ad ex excepteur cillum exercitation in sit voluptate.

          Enim esse id id reprehenderit voluptate nisi ex est. Elit laboris laboris laboris exercitation. Fugiat cillum sunt do do eiusmod eiusmod aliqua ullamco laboris.

          Labore ad tempor deserunt et irure proident. Consequat pariatur officia occaecat ad incididunt. Esse nostrud minim ad deserunt in incididunt occaecat dolore fugiat magna labore mollit.

          Dolor mollit enim anim sit veniam et culpa cupidatat proident labore elit. In do culpa esse incididunt dolore elit et quis duis ipsum sint ipsum minim do. Magna ut adipisicing amet incididunt mollit Lorem non eu enim proident nostrud aliquip velit. Eu voluptate elit eiusmod qui voluptate et pariatur. Labore nostrud officia eu aliqua non ullamco proident.

          Fugiat do pariatur ex duis aliquip consequat magna pariatur excepteur laboris exercitation. Lorem magna commodo adipisicing irure ullamco est excepteur velit aliquip ipsum officia amet. Mollit aute qui sunt est labore est nostrud veniam officia. Adipisicing id cupidatat proident eu quis ad amet amet veniam commodo. Fugiat anim fugiat velit veniam laboris. Elit consequat enim eiusmod ipsum. Minim ex in adipisicing amet qui ex proident occaecat et laborum eu.

          Laborum esse veniam laborum ex duis nisi qui aliqua est qui ea consectetur in tempor. Enim consectetur irure sit ea adipisicing occaecat ea ex irure excepteur. Sunt non incididunt mollit officia. Consequat Lorem ex consequat sint minim. Id non non id magna magna cupidatat duis sunt consectetur aute elit enim. Laborum ut amet irure minim excepteur culpa commodo ut. Magna esse eiusmod nisi voluptate minim sint consequat tempor ullamco Lorem.

          Elit velit et sunt enim sint dolore ullamco laborum ex dolore id dolor. Dolore consequat magna ipsum qui nisi incididunt culpa incididunt ipsum ad commodo ut labore. Deserunt mollit quis duis id sit ipsum excepteur nostrud nisi do eiusmod mollit non. Dolore consectetur est amet ad aliqua amet mollit.
        </p>

        <button
          onClick={cookiesAccept}
          className=" mt-2 btn btn-primary btn-outline-primary p-3 w-100 text-uppercase text-white"
        >
          I Accept
        </button>
      </div>
    );
  }
}

export default TermsOfService;