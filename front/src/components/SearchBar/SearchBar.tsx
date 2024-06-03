import TextField from "@mui/material/TextField";

const SearchBar = ({
  handleValueChange,
}: {
  handleValueChange: (target: HTMLInputElement) => void;
}) => {
  return (
    <>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          handleValueChange(target);
        }}
        label="Enter a Name"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
    </>
  );
};

export default SearchBar;
