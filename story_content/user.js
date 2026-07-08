function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6480fMvbBqt":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound.mp3";
audio.load();
audio.play();
audio.loop=true;
audio.volume=0.5;
}

