import { Button } from "antd"
import { FieldValues, useForm } from "react-hook-form"
import { useGetLoginMutation } from "../redux/features/auth/authApi"
import { useAppDispatch } from "../redux/hooks"
import { TUser, setUser } from "../redux/features/auth/authSlice"
import { verifyToken } from "../utils/verifyToken"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm()

  const [login, {  error }] = useGetLoginMutation()
  // console.log('data =>', data)
  console.log('error =>', error)
  const onSubmit = async (data: FieldValues) => {
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

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">id:</label>
        <input type="text" {...register('userId')} id="id" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" {...register('password')} id="password" />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  )
}

export default Login