const FAQ = () => {
  return (
    <>
      <section className="w-full pb-20">
        <h1 className="text-3xl font-bold text-center pb-10">FAQ</h1>
        <div className="join join-vertical w-full bg-white">
          {/* // First QUestion */}
          <div className="collapse collapse-arrow join-item border-base-300 border ">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What do i need to do to get started?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae culpa cum eos in magnam soluta nobis! Neque placeat
                fugit quisquam.
              </p>
            </div>
          </div>

          {/* // Second Question */}
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Do I need to be a Liberian to apply?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                cupiditate iusto, beatae quia, dolores officiis tenetur commodi
                sint doloremque, debitis cum? Adipisci perferendis repellat
                tempore libero nulla natus eligendi sunt.
              </p>
            </div>
          </div>

          {/* // Third Question */}
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Can i create an account before entering the country?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quam
                voluptatum laborum suscipit totam, deserunt doloribus ab libero!
                Ad, corporis.
              </p>
            </div>
          </div>

          {/* // Fourth Question */}
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What is the cost of admission?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quam
                voluptatum laborum suscipit totam, deserunt doloribus ab libero!
                Ad, corporis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
