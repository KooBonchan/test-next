'use client'
import { Synth } from "tone";

export default function MidiButton(){
  const synth = new Synth().toDestination();

  return (
    <>
      <button
          onClick={() => synth.triggerAttackRelease("A1", "16n")}>
        start
      </button>
    </>
  );
}