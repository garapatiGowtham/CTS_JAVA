
import java.lang.reflect.*;

public class ReflectionDemo {
    public static void sayHello() {
        System.out.println("Hello from Reflection!");
    }

    public static void main(String[] args) throws Exception {
        Class<?> cls = Class.forName("ReflectionDemo");
        Method[] methods = cls.getDeclaredMethods();

        for (Method m : methods) {
            System.out.println("Method: " + m.getName());
        }

        Method method = cls.getMethod("sayHello");
        method.invoke(null);
    }
}

