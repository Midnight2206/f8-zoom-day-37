import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import styles from "./Home.module.scss";
import useFormCustom from "../../hooks/useFormCustom";

const cx = classNames.bind(styles);

function Home() {
  const navigate = useNavigate();

  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    registerCustom,
    handleSubmitCustom,
    resetCustom,
    watchCustom,
  } = useFormCustom({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const onSubmit2 = (data) => {
    console.log(data);
    resetCustom();
  };

  return (
    <div className={cx("wrapper")}>
      <h1>Home</h1>

      <div className={cx("menu")}>
        <button
          onClick={() => navigate("/performance-demo")}
          className={cx("menu-item")}
        >
          Performance Demo
        </button>
        <button
          onClick={() => navigate("/focus-demo")}
          className={cx("menu-item")}
        >
          Focus demo
        </button>
      </div>

      {/* Notes */}
      <div className={cx("notes")}>
        <h6>DAY 38</h6>
        <p>Bài 1: Nút Performance Demo trang Home</p>
        <p>Bài 2.1 và 2.2: Nút Focus Demo trên trang Home</p>
        <p>
          Bài 2.3: Đã cập nhật Modal với thêm 3 nút <b>"Open bằng ref"</b>,{" "}
          <b>"Close bằng ref"</b> và <b>"Toggle bằng ref"</b>
        </p>
        <p>Bài 3: Đã thêm hàm tính toán nặng vào code của Bài 1</p>
        <p>
          Bài 4: Đã tạo <b>withLoading</b> và sử dụng trong "Trang cá nhân"
          (truy cập bằng cách click vào avatar → chọn Trang cá nhân). Sử dụng để
          load ảnh và load khóa học thay cho Products
        </p>
        <p>
          Bài 5: Trong trang "Bài viết" và "User". Trang "Bài viết" em đã lấy{" "}
          <code>limit = 20</code> để đảm bảo có Scroll To Top
        </p>
        <p>
          Bài 6.1: Đã sử dụng <b>useApi</b> trong DataFetcher và thu được kết quả
          như kỳ vọng
        </p>
        <p>
          Bài 6.2: Đã sử dụng để Toggle và Force Show trong Users (hiển thị full
          information hay compact information) và trong "Bài viết" (hiển thị hoặc
          ẩn body của bài viết)
        </p>
        <p>
          Bài 6.3: Đã dùng <b>useApi</b> với 2 endpoint có nút refresh ở Users và
          "Bài viết". Chỗ <b>useToggle</b> đã dùng như ở bài 6.2 nên em nghĩ
          custom hook này đã hoạt động đúng yêu cầu
        </p>
      </div>

      {/* Form Demo */}
      <div className={cx("form-demo")}>
        <h1>FORM DEMO</h1>

        {/* Form với React Hook Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email")}
            type="text"
            placeholder="Enter email..."
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Enter password..."
          />
          <button>Submit</button>

          <p>Email hiện tại: {watch("email")}</p>
          <p>Password hiện tại: {watch("password")}</p>
        </form>

        {/* Form với Custom Hook */}
        <form onSubmit={handleSubmitCustom(onSubmit2)}>
          <input
            {...registerCustom("email")}
            type="text"
            placeholder="Enter email..."
          />
          <input
            {...registerCustom("password")}
            type="password"
            placeholder="Enter password..."
          />
          <button>Submit</button>

          <p>Email hiện tại: {watchCustom("email")}</p>
          <p>Password hiện tại: {watchCustom("password")}</p>
        </form>
      </div>
    </div>
  );
}

export default Home;
