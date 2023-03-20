export type VideoProps = {
  id: number;
  previewImage: string;
  videoLink: string;
};

function Video({
  id,
  previewImage,
  videoLink
}: VideoProps): JSX.Element {
  return (
    <video className="player__video" poster={previewImage}>
      <source src={videoLink} type="video/mp4" />
    </video>
  );
}
export default Video;
