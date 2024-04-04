import "./App.css";


function StudentForm() {
  return (
    <>
      <div class="container ">
        <form action="">

          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            required
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default StudentForm;
