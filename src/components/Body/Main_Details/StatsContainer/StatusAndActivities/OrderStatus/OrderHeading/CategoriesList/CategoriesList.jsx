const CategoriesList = ({ categoriesList, setValue, setBoolean }) => {
  const handleValue = (e, setValue, setBoolean) => {
    setValue(e.target.value);
    setBoolean(false);
  };

  return (
    <div className="absolute top-full bg-white w-full mt-[4px] text-left gap-[4px] border-2 p-1 border-[#e3e6e7] rounded-md z-10">
      {categoriesList.map((category) => {
        return (
          <button
            key={Math.random()}
            className="w-full hover:bg-[#e3e6e7]"
            value={category}
            onClick={(e) => handleValue(e, setValue, setBoolean)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoriesList;
