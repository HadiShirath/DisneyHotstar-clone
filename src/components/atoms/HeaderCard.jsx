import PropTypes from "prop-types";

function HeaderCard({ name, Icon }) {
  return (
    <div
      className="
    text-white
    flex
    items-center
    gap-3
    text-[15px]
    font-semibold
    cursor-pointer
    "
    >
      <Icon />
      <h2
        className="
    hover:before:scale-x-100
    hover:before:origin-left-center
    relative
    before:w-full
    before:h-0.5
    before:origin-left
    before:transition-all
    before:duration-300
    before:easy-in-out
    before:scale-x-0
    before:bg-white
    before:absolute
    before:left-0
    before:bottom-0
    py-1"
      >
        {name}
      </h2>
    </div>
  );
}

HeaderCard.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default HeaderCard;
