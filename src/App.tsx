import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BlogSchema, BlogSchemaType } from "./schema/blog.schema";
import Input from "./components/Input";

function App() {
  const { register, handleSubmit, reset, formState } = useForm<BlogSchemaType>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  console.log(formState.errors);

  function onSubmitHandler(data: BlogSchemaType) {
    console.log(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Input
        {...register("title")}
        errorMessage={formState.errors.title?.message}
      />
      <label>
        content:
        <textarea {...register("content")} />
        {formState.errors.content && <p>{formState.errors.content.message}</p>}
      </label>
      <button type="submit">submit</button>
    </form>
  );
}

export default App;
