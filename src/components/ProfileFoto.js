import './ProfileFoto.css';

const ProfileFoto = (props) => {
  return (
    <div className="profile__foto">
      <img className="profile__foto-edit" alt="" src={props.edit_foto} />
      <img className="profile__foto-img" alt="Ваше фото" src={props.profile_foto} />
    </div>
  );
};

export default ProfileFoto;
