function page({params}) {
    const id= params.user;
    return (
        <div className="h-screen flex justify-center items-center text-3xl font-bold">
            User {id}
        </div>
    );
}

export default page;