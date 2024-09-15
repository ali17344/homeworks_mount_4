export  const CreateBlog = ({add}) => {
    return (
        <div>
            <input type="text" />
            <textarea placeholder="What's happened ?"></textarea>
            <button onClick={add}>Add</button>
        </div>
    );
}
