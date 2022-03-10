import andriod.widget.Toast;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {
    // creating varaible for our edittext , button and dbhandler

    private EditText nameEdit, addressEdit;
    private Button saveBtn;
    private DBHandler dbHandler;

    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        nameEdit = findViewById(R.id.txt1);
        addressEdit = findViewById(R.id.txt2);

        saveBtn = findViewById(R.id.button1);

        dbHandler = new DBHandler(MainActivity.this);
        saveBtn.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v){

                String name = nameEdit.getText().toString();
                String address = addressEdit.getText().toString();

                if(name.isEmpty() && address.isEmpty()){
                    Toast.makeText(MainActivity.this, "Please enter all the data..", Toast.LENGTH_SHORT).show

                    return;
                }
                dbHandler.addStudent(name, address);
                 
                Toast.makeText(MainActivity.this, "student has been added.", Toast.LENGTH_SHORT).show();
                nameEdit.setText("");
                addressEdit.setAddres("");
            }
        })

    }
}