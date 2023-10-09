import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";

function Note(props) {
  const { title, content } = props;
  const noteUrl = window.location.href;
  const currentDate = new Date();

  function handleShare() {
    const formattedDate = currentDate.toLocaleString();

    const shareText = `Title: ${title}\nContent: ${content}\nDate and Time: ${formattedDate}\nURL: ${noteUrl}`;

    if (navigator.share) {
      navigator.share({
        text: shareText,
      })
        .then(() => {
          console.log("Shared successfully");
        })
        .catch((error) => {
          console.error("Share failed:", error);
        });
    } else {
      const socialMediaUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}`;
      window.open(socialMediaUrl, "_blank");
    }
  }

  function handleDelete() {
    const shouldDelete = window.confirm("Do you want to delete this note?");
    if (shouldDelete) {
      props.onDelete();
    }
  }

  return (
    <div className="note button">
      <h1>{title}</h1>
      <p>{content}</p>
      <p3>
        <i>{currentDate.toLocaleString()}</i>
      </p3>
      <div className="note-button">
        <DeleteIcon onClick={handleDelete} />
        <ShareIcon onClick={handleShare} />
      </div>
    </div>
  );
}

export default Note; 
