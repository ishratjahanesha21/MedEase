const stats = [
    { id: 1, name: 'Happy Customer', value: '20k +' },
    { id: 2, name: 'Employee', value: '150 +' },
    { id: 3, name: 'Years of experience', value: '25 +' },
  ]

const Stats = () => {
    return (
        <div className="w-full md:w-10/12 mx-auto  pl-8">
        <div className="w-full ">
            <p className="text-2xl font-semibold text-gray-800 lg:text-3xl ">Our Stats</p>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 mt-16">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 " >{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight  sm:text-5xl" style={{color:'#34B778'}}>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
};

export default Stats;