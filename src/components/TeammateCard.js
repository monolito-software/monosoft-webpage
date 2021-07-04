import styles from '../styles/components/TeammateCard.module.css';

const TeammateCard = ({
  firstName,
  lastName,
  githubUrl,
  profilePicUrl,
  about,
  index
} = props) => {
  return (
    <div className={styles.teammate} id={index}>
      <div className={styles.baseProfile}>
        <img
          src={profilePicUrl}
          alt={`Foto de perfil de ${firstName} ${lastName}`}
        />
        <div className={styles.baseData}>
          <p className="normal-text">{firstName}</p>
          <p className="small-text">{lastName}</p>
          <a href={githubUrl}>
            <img src="/icons/github.svg" alt="Ícone do Github" />
          </a>
        </div>
      </div>
      <div className={styles.aboutText}>
        <p className="smaller-text">{about}</p>
      </div>
    </div>
  );
};

export default TeammateCard;
