<?php 

add_shortcode('cached_esimgo_day_per_post', function($atts) {
    $atts = shortcode_atts([
        'id' => '115781', // Elementor template ID
        'cache_time' => 3600, // 1 hour default
    ], $atts);

    $template_id = intval($atts['id']);
    $post_id = get_the_ID(); // Current post/page ID
    $cache_key = 'elementor_template_' . $template_id . '_post_' . '86011';

    $output = get_transient($cache_key);

    if ($output === false && $template_id) {
        ob_start();
        echo \Elementor\Plugin::instance()->frontend->get_builder_content($template_id, true);
        $output = ob_get_clean();

        set_transient($cache_key, $output, intval($atts['cache_time']));
        
         
    }

    return $output ?: '<!-- Template not found or empty -->';
});
