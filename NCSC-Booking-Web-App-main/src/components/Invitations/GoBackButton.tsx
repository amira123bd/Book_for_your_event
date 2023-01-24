import { View } from "../../../pages/invitations";

const GoBackButton: React.FC<{
  setView: React.Dispatch<React.SetStateAction<View>>;
}> = ({ setView }) => (
  <button
  
    onClick={() => setView("Main")}
    className="flex flex-row items-center text-2xl font-bold mb-12 space-x-4 lg:hidden"
  >
    <svg
      className="w-12 h-12 text-black"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
      />
    </svg>
    <p>Go back</p>
  </button>
);

export default GoBackButton;
