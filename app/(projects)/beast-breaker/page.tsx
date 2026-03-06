import Icon from "@/app/components/Icon";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";

export default function Page() {
  return (
    <>
      <h2>Beast Breaker</h2>
      <YouTubeEmbed
        src="https://www.youtube-nocookie.com/embed/SZhqedzllLE?si=N72-HHaKdfa4vvwN"
        width={560}
        height={315} />
      <p>Released September 2021</p>
      <p><a href="https://store.epicgames.com/en-US/p/beast-breaker" target="_blank" rel="noopener noreferrer">Switch</a></p>
      <p><a href="https://www.nintendo.com/us/store/products/beast-breaker-switch/" target="_blank" rel="noopener noreferrer">Epic Games</a></p>
      <Icon site="Epic Games" width={50} height={50} style={{ fill: "white", background: "black", border: "1px solid black" }}/>
      <Icon site="Facebook" width={50} height={50} style={{ fill: "white", background: "black", border: "1px solid black" }}/>
      <Icon site="GitHub" width={50} height={50} style={{ fill: "white", background: "black", border: "1px solid black" }}/>
      <Icon site="Instagram" width={50} height={50} style={{ fill: "white", background: "black", border: "1px solid black" }}/>
      <Icon site="itch.io" width={50} height={50} style={{ fill: "white", background: "black", border: "1px solid black" }}/>
      <Icon site="Nintendo Switch" width={50} height={50} style={{ fill: "white", background: "black", border: "1px solid black" }}/>
      <Icon site="Twitch" width={50} height={50} style={{ fill: "white", background: "black", border: "1px solid black" }}/>
      <Icon site="Twitter" width={50} height={50} style={{ fill: "white", background: "black", border: "1px solid black" }}/>
      <Icon site="YouTube" width={50} height={50} style={{ fill: "white", background: "black", border: "1px solid black" }}/>
    </>
  );
}
