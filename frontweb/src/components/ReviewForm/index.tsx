import { AxiosRequestConfig } from 'axios';
import ButtonIcon from 'components/ButtonIcon';
import { useForm } from 'react-hook-form';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';
import { toast } from 'react-toastify';
import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    if (formData.text === "") {
      toast.error('Avaliação não informada!');
      return
    }

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue('text', '');
        toast.info('Avaliação registrada com sucesso!');
        onInsertReview(response.data);
      })
      .catch((error) => {
        toast.error('Falha ao salvar avaliação!');
      });
  };

  return (
    <div className="base-card reviewform-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="reviewform-input">
          <input
            {...register('text', {})}
            type="text"
            className={`form-control base-input`}
            name="text"
            placeholder="Deixe sua avaliação aqui"
          />
        </div>
        <div className="reviewform-submit">
          <ButtonIcon text="SALVAR AVALIAÇÃO" />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
