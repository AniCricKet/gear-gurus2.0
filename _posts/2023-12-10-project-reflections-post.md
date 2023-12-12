---
toc: true
comments: false
layout: post
type: tangibles
title: Project Reflection
permalink: /teamreflection
---

### Plan

### Changes we made to the plan


### Issues we ran into / how we resolved them


# Issues we ran into:

```java 
class Fibo {
    private BufferedImage image;
    private Graphics graphics;
    private Random random;
    private Supplier<BufferedImage> generator;

    private static final float SQRT5 = (float)Math.sqrt(5);
    // private static final int CANVAS_WIDTH = 600;
    // private static final int CANVAS_HEIGHT = 400;
    private static final int CANVAS_WIDTH = 5000;
    private static final int CANVAS_HEIGHT = 5000;

    public Fibo(String type) {
        final ArrayList<Supplier<BufferedImage>> list = new ArrayList<>();
        list.add(this::recursiveArt);
        list.add(this::recursiveArtWithBinet);
        list.add(this::iterativeArt);
        list.add(this::maxtrixArt);

        image = new BufferedImage(CANVAS_WIDTH, CANVAS_HEIGHT, BufferedImage.TYPE_INT_RGB);
        graphics = image.createGraphics();
        random = new Random();

        if(type.equals("random")) {
            generator = list.get(random.nextInt(list.size()));
        } else {
            generator = switch (type) {
                case "recursive" -> list.get(0);
                case "recursiveWithBinet" -> list.get(1);
                case "iterative" -> list.get(2);
                case "matrix" -> list.get(3);
                default -> list.get(0);
            };
        }
    }

    public BufferedImage generate() {
        return generator.get();
    }

    private BufferedImage recursiveArt() {
        final int centerX = CANVAS_WIDTH / 2;
        final int centerY = CANVAS_HEIGHT / 2;
        recursiveDraw(centerX, centerY, 1, 1, 0, 20);
        return image;
    }

    private void recursiveDraw(int x, int y, int a, int b, int count, int maxInterations) {
        if(count < maxInterations) {
            graphics.setColor(randomHSLColor());
            graphics.fillArc(x, y, (int)(a * 2.5), (int)(a * 2.5), 0, radianToDegree(2*Math.PI));
            final int nextX = x + (int)(b * 3 * Math.cos((double)count));
            final int nextY = y + (int)(b * 3 * Math.sin((double)count));
            recursiveDraw(nextX, nextY, b, a + b, count + 1, maxInterations);
        }
    }

    private int radianToDegree(double radian) {
        return (int)(radian * 180 / Math.PI);
    }

    private Color randomHSLColor() {
        float h = random.nextFloat() * 360;
        float s = 70.0f;
        float l = 50.0f;
        return Color.getHSBColor(h, s, l);
    }

    private BufferedImage recursiveArtWithBinet() {
        final int centerX = CANVAS_WIDTH / 2;
        final int centerY = CANVAS_HEIGHT / 2;
        recursiveDrawWithBinet(centerX - 300, centerY - 200, 0.5, 20, 0.0);
        return image;
    }

    private void recursiveDrawWithBinet(int x, int y, double size, int remainingIterations, double angle) {
        if(remainingIterations > 0) {
            graphics.setColor(randomHSLColor());
            graphics.fillArc(x, y, (int)(size), (int)(size), 0, radianToDegree(2*Math.PI));
            final int newSize = fibonacciBinet(remainingIterations);
            final int nextX = x + (int)(newSize * 0.02 * Math.cos(angle));
            final int nextY = y + (int)(newSize * 0.02 * Math.sin(angle));
            final double newAngle = angle + Math.PI / 3;
            recursiveDrawWithBinet(nextX, nextY, newSize * 0.1, remainingIterations - 1, newAngle);
        }
    }

    private int fibonacciBinet(int n) {
        return Math.round(
            (1.0f / SQRT5) *
            (pow((1 + SQRT5)/2, n) - pow((1 - SQRT5)/2, n))
        );
    }

    private float pow(float a, int n) {
        if(n <= 0) {
            return 1;
        }
        float output = 1;
        for(int i = 0; i < n; i++) {
            output *= a;
        }
        return output;
    }

    private BufferedImage iterativeArt() {
        final int centerX = CANVAS_WIDTH / 2;
        final int centerY = CANVAS_HEIGHT / 2;
        int x = centerX;
        int y = centerY;
        int a = 1;
        int b = 1;
        int count = 0;
        for(int i = 0; i < CANVAS_WIDTH; i++) {
            graphics.setColor(randomHSLColor());
            graphics.fillArc(x, y, (int)(a * 2.5), (int)(a * 2.5), 0, radianToDegree(2*Math.PI));
            final int nextX = x + (int)(b * 3 * Math.cos((double)count));
            final int nextY = y + (int)(b * 3 * Math.sin((double)count));
            x = nextX;
            y = nextY;
            a = b;
            b = a + b;
            count++;
        }
        return image;
    }

    private int fibonacciMatrix(int n) {
        if (n == 0) {
            return 0;
        }

        final int[][] baseMatrix = {
            {1, 1},
            {1, 0}
        };

        final int[][] result = matrixPower(baseMatrix, n - 1);
        return result[0][0];
    }

    private int[][] matrixPower(int[][] matrix, int power) {
        int[][] result = {{1, 0}, {0, 1}};

        if (power == 0) {
            return result;
        }

        while(power > 0) {
            if ((power & 1) == 1) {
                result = multiplyMatrix(result, matrix);
            }
            matrix = multiplyMatrix(matrix, matrix);
            power >>= 1;
        }
        return result;
    }

    private int[][] multiplyMatrix(int[][] a, int[][] b) {
        final int[][] result = new int[a.length][b[0].length];
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < b[0].length; j++) {
                for (int k = 0; k < b.length; k++) {
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return result;
    }

    private BufferedImage maxtrixArt() {
        final int centerX = CANVAS_WIDTH / 2;
        final int centerY = CANVAS_HEIGHT / 2;
        double angle = 0;
        final double scale = 0.8;
        for(int i = 1; i < 20; i++) {
            final int fibNumber = fibonacciMatrix(i);
            final int size = (int)(fibNumber * scale);
            final int x = centerX + (int)(size * 1 * Math.cos(angle));
            final int y = centerY + (int)(size * 1 * Math.sin(angle));
            graphics.setColor(randomHSLColor());
            graphics.fillArc(x, y, size, size, 0, radianToDegree(2*Math.PI));
            angle += Math.PI / 6;
        }
        return image;
    }
}
```
### issues in the code

1. Memory Usage:
Generating large images (e.g., 5000x5000 pixels) may lead to high memory usage, potentially causing performance issues or even OutOfMemoryError. Ensure that the chosen image dimensions are reasonable for the available memory.
2. Random Number Usage:
The randomHSLColor method generates random HSL colors. Depending on your application, you might want to ensure that the colors generated are visually pleasing and that they provide enough contrast for the art.
3. Code Redundancy:
There is some redundancy in code, particularly in the initialization of the list of Supplier<BufferedImage> objects. Consider refactoring to eliminate redundancy and improve code readability.
4. Error Handling:
The code does not include error handling for potential issues, such as invalid input for the Fibo constructor or potential exceptions during matrix operations. Implement appropriate error handling to make the code more robust.
5. Code Structure:
The code structure may be improved by breaking down the large class into smaller, more manageable classes or methods. This can enhance readability, maintainability, and testability.


``` java

@RestController
@RequestMapping("/api/fibo") 
public class FiboApiController { 
    String last_run = null;  

    @GetMapping("/generate")
    public byte[] getFibonacci() {
        Fibo fibo = new Fibo("random");
        BufferedImage image = fibo.generate();
        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(image, "png", baos);
            byte[] bytes = baos.toByteArray();
            return bytes;
        } 
        catch (IOException e) {
            return null;
        }

        
    }
}
```
### Issue that the code can face:

1. Tread Safety:
The last_run variable is shared across multiple requests without synchronization. If this variable is meant to be accessed and modified concurrently, consider making it thread-safe (e.g., using AtomicReference).
2. Error Handling:
The IOException caught during image writing is logged but not propagated or handled appropriately. You might want to log the exception details or return a meaningful error response to the client.
3. Exception Handling:
Consider adding more specific exception handling for potential failures during the Fibonacci generation or image writing process. For instance, handle exceptions related to invalid input or failures in the Fibonacci generation.
3. Resource Cleanup:
It's good practice to close the ByteArrayOutputStream (baos) in a finally block or, better yet, use try-with-resources to ensure proper resource cleanup.
5. Magic String:
The string "png" is a magic string. Consider defining it as a constant to avoid potential typos and make the code more maintainable.

### [final runtime](https://anicricket.github.io/gear-gurus2.0/)





### Future improvements