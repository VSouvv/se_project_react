import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";

function Profile({
  onCardClick,
  onAddButtonClick,
  clothingItems,
  onEditProfileModal,
  onSignout,
  onItemLike,
}) {
  return (
    <div className="Profile">
      <section className="profile__sidebar">
        <Sidebar
          onEditProfileModal={onEditProfileModal}
          onSignout={onSignout}
        />
      </section>
      <section className="profile__clothes">
        <ClothesSection
          onCardClick={onCardClick}
          onAddButtonClick={onAddButtonClick}
          clothingItems={clothingItems}
          onItemLike={onItemLike}
        />
      </section>
    </div>
  );
}

export default Profile;
