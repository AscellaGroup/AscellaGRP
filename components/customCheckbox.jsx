export const CustomCheckbox = ({ name, label, checked, onChange }) => (
  <label className="flex items-center cursor-pointer">
    <div className="relative">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div
        className={`w-5 h-5 bg-black border border-gray-700 rounded transition-all duration-200 ease-in-out flex items-center justify-center ${
          checked ? "bg-opacity-100" : "bg-opacity-0"
        }`}
      >
        {checked && (
          <svg
            className="w-3.5 h-3.5 text-white fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>
    </div>
    <span className="ml-2">{label}</span>
  </label>
);