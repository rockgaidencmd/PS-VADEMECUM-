package com.medishort360.vademecum;

import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.View;

import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    /** Fondo de marca, el mismo que usa la interfaz web. */
    private static final int BRAND_BACKGROUND = Color.parseColor("#0a0f1a");

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // A partir de Android 15 el sistema dibuja la aplicación por debajo de la
        // barra de estado y de la barra de navegación, y en Android 16 ya no existe
        // forma de desactivarlo. Sin compensar esos márgenes la cabecera queda
        // tapada por el reloj y la navegación inferior por los botones del sistema,
        // que además dejan de poder pulsarse.
        View content = findViewById(android.R.id.content);
        ViewCompat.setOnApplyWindowInsetsListener(content, (view, windowInsets) -> {
            Insets bars = windowInsets.getInsets(
                WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout()
            );
            view.setPadding(bars.left, bars.top, bars.right, bars.bottom);
            return WindowInsetsCompat.CONSUMED;
        });

        // El hueco que dejan esos márgenes muestra el fondo de la ventana.
        getWindow().setBackgroundDrawable(new ColorDrawable(BRAND_BACKGROUND));

        // Iconos del sistema en claro, legibles sobre el fondo oscuro.
        WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView())
            .setAppearanceLightStatusBars(false);
    }
}
