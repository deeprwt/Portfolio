import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const TypeWriter = () => {
  return (
    <div>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#940808",
          fontWeight: 400,
          fontSize: "1em",
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          "Hey there,",
          "it consist of two types...",
          "Single text display and multi text display",
          "Fonts can be customized.",
          "The type speed can be customized as well",
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={30}
      />
    </div>
  );
};

export default TypeWriter;
