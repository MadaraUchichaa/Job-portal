import InputField from "../components/InputField"

const Location = ({handleChange}) => {
    //sibar vala css and checkmark vala all in app .css
    //all location filtered based upon main function filtereddata
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value="london"
          title="London"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Seattle"
          title="Seattle"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="madrid"
          title="Madrid"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="boston"
          title="Boston"
          name="test"
        />
        
      </div>
    </div>
  );
}
export default Location