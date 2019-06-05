import React, { Component } from "react";
import "../css/submitform.css";

class SubmitIdeaModal extends Component {
  render() {
    return (
      <div className="bg-modal">
        <div className="modal-contents-room">
        <button className="btn btn-danger btn-sm idea-close-button" onClick={this.props.closeIdeaModal}>X</button>
          <form className="idea-form" action="#">
            <h2 className="idea-h2 mb-3">Suggest a Card</h2>

            <div class="row">
              <label className="idea-label" for="fancy-textarea"><strong>Description</strong></label>
              <textarea className="idea-textarea" name="fancy-textarea" id="fancy-textarea" placeholder="Suggest a card, or a list of several cards separated by commas." autoFocus/>
            </div>

            <button className="btn btn-lg btn-dark idea-button" type="submit" tabindex="0">
                Share your stupid idea!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SubmitIdeaModal;
