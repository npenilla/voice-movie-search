import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { SpeechProvider, useSpeechContext } from "@speechly/react-client";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  BigTranscript,
  BigTranscriptContainer,
  ErrorPanel,
} from "@speechly/react-ui";
const SPEECHLY_API_KEY = process.env.REACT_APP_SPEECHLY_API_KEY;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SpeechProvider appId={SPEECHLY_API_KEY} language="en-US">
          <h1>Voice Movie Search</h1>

          <BigTranscriptContainer>
            <BigTranscript />
          </BigTranscriptContainer>

          <PushToTalkButtonContainer>
            <PushToTalkButton captureKey=" " />
            <ErrorPanel />
          </PushToTalkButtonContainer>
        </SpeechProvider>
      </header>
    </div>
  );
}

export default App;
