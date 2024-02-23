import { Button, Row } from "antd";
// import { FieldValues, useForm } from "react-hook-form"
import { useGetLoginMutation } from "../redux/features/auth/authApi"
import { useAppDispatch } from "../redux/hooks"
import { TUser, setUser } from "../redux/features/auth/authSlice"
import { verifyToken } from "../utils/verifyToken"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { FieldValues } from "react-hook-form";
import PHForm from "../components/Form/PHForm";
import PHInput from "../components/Form/PHInput";
 

type TDefaultValues = {
  userId: string,
  password: string
}
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  // const { register, handleSubmit } = useForm()

  const [login] = useGetLoginMutation()
  // console.log('data =>', data)
  // console.log('error =>', error)
  const onSubmit = async (data: FieldValues) => {
    console.log("data =>", data);
    const toastId = toast.loading('Logging in');
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success('Logged in', { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };
  const defaultValues : TDefaultValues= {
    userId:"A-0001",
    password:"admin123" 
  }
  return (
    <Row justify='center' align='middle' style={{height: '100vh'}}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
          {/* <label htmlFor="id">id:</label> */}
          {/* <input type="text" {...register('userId')} id="id" /> */}
          <PHInput type="text" name="userId" label="ID" />
          <PHInput type="password" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
