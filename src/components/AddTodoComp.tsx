import { Box, Button, TextField } from "@mui/material";
import AddCommentIcon from '@mui/icons-material/AddComment';
import { useState } from "react";

//^*1.yol (props type tanımlaması ile)
// const AddTodoComp = ({addTodo}:{addTodo:(text:string)=>Promise<void>}) => {

//^* 2.yol
interface IAddTodoComp {
  // addTodo:(text:string)=>Promise<void>;
  addTodo:addFunc; //! üsttel,m, types.d.ts dosyasına aldığımız için buradaki kısa tanımlamayı yapabildik!
}
const AddTodoComp = ({addTodo}: IAddTodoComp) => {

  // const [text, setText] = useState<String>('')
  const [text, setText] = useState('') //&her zaman type ataması yapmaya gerek yok. TS type inference özelliği sayesinde initial değerine göre otomatik type ataması yapıyor

  const handleClick = () => {
    console.log(text)
    addTodo(text)
    setText('')
  }


  return (
    <div>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: { xs: "flex-start", sm: "center" },
          m: { xs: 1, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}
      >
        <TextField
          id="outlined-basic"
          label="Add New Todo"
          color="secondary"
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          inputProps={{maxLength:40}}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "54px", m: 1, fontSize:'16px' }}
          endIcon={<AddCommentIcon />}
          disabled={!text.trim()}
          onClick={handleClick}
        >
          ADD Todo
        </Button>
      </Box>
    </div>
  )
}

export default AddTodoComp