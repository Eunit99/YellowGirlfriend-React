import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    const user = this.props.user,
      greetWithName = `Howdy ${user}!`,
      greetWithoutName = `Howdy!`;
    let didReadBriefDescription = this.props.didReadBriefDescription;
    var isVisitor;

      if (user !== undefined && user !== "") {
        isVisitor = false
      } else {
        isVisitor = true
      }
    // console.log(`isVisitor? ${isVisitor}`)

    return (
      <div className="greeting-container px-3 pb-0">
        <div className="long-into">
          {isVisitor ? greetWithoutName : greetWithName}
        </div>
        <div className="small-into mt-2">Welcome to YellowGirlfriend.</div>

        <div className="mt-3">
          <span
            className="bold">Yellow</span> as a colour symbolizes <a
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
            href="https://colormatters.com/yellow">
            deception, betrayal, egoism
          </a> and then, we match it with the term <span className="bold">girlfriend</span> to probably
          mean a <span className="italic">cheating girlfriend</span>.

          <br />
          <br />
          YellowGirlfriend is an awakening movement to the male folks by its developer.
          Its aim is to bring men to the cognizance that their girlfriend is cheating <span
            className="italic i">(or probably will)</span> and therefore enabling them not to expect
          more from them rather, they should brace it.

          {/* Hide from this part below */}
          <div className="displayNone"> According to <a
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/1-one-infinit/do-men-or-women-cheat-more-b8b30b5c6108">
              statistics
            </a>, women cheat more than men and also, according to a report, <a
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
            href="https://gen.medium.com/the-future-of-infidelity-is-female-4e2da7cc7037">the future of infidelity is female
          </a>.
            <blockquote
              className="p-blockquote mt-3 pl-3">
              Rates of infidelity among women are thought to increase with age. In one study,
              rates were higher in more recent marriages, compared with previous generations [...]
              Another study found out that the likelihood for women to be involved in infidelity
              reached a peak in the seventh year of their marriage [...]
              <cite
                className="p-cite"
              > -
                <a
                  className="text-decoration-none"
                  href="https://en.wikipedia.org/wiki/Infidelity"
                  rel="noreferrer"
                  target="_blank"
                > Wikipedia</a>
              </cite>
            </blockquote>
          According to  Helen Fisher, Ph.D., author of Anatomy of Love: A Natural History of Mating, Marriage,
          and Why We Stray, <blockquote
            className="p-blockquote mt-3 pl-3">
            Infidelity is about choice. Women now are more inclined to demand to have all their needs met.
              <cite
              className="p-cite"
            > -
                <a
                className="text-decoration-none"
                href="https://gen.medium.com/the-future-of-infidelity-is-female-4e2da7cc7037"
                rel="noreferrer"
                target="_blank"
              > Helen Fisher, Ph.D.</a>
            </cite>
          </blockquote>
        </div>

        {/* Hidden part start */}
        <p className="displayNone">
        This means that fewer women are marrying out of need, instead, they are marrying to please themselves.
        When they are dissatisfied with something, they can feel justified to go elsewhere [...]
        </p>
        {/* Hidden part end */}
        <br />
        <br />
        We at YellowGirlfriend do not deny the fact that both genders cheat, but we
        aim at sensitizing the male folks about the potentiality of their girlfriend to cheat.
        </div>

        {/* Hidden part end */}

        <br />
        <span
          className="text-uppercase d-inline-block mb-5"
        > We hope you understand that this is an expressed opinion and we are not to be held liable for
          damages arising by not limited to the use, application, of the advice, opinion, and or
          suggestion contained herein on YellowGirlfriend.
        </span>
        <button
          onClick={didReadBriefDescription}
          className="btn btn-primary btn-outline-primary p-3 w-100 text-uppercase text-white mt-5 cta-btn-read"
        >
        I Understand
        </button>
      </div>
    );
  }
}

export default Greetings;