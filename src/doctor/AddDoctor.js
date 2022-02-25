function AddDoctor() {
  return (
    <div>
      <label>Doctor Department</label>
      <select>
        <option>Select Doctor Type</option>
        <option>Dentist</option>
        <option>Child</option>
        <option>Genaral</option>

      </select>
      <br />
      <label>Doctor Name</label>
      <input type="text" /><br />
      <label>Available Time</label>
      From <input type="text" />  To <input type="text" /><br />
      <input type="button" value="submit" />
      <input type="button" value="Clear" />


    </div>

  );
}

export default AddDoctor;