<?php foreach (json_decode($field['field_option'], true) as $key => $value) : ?>
    <label class="form-checkbox-label">
        <input class="form-checkbox" type="checkbox" name="<?= $field['field_name'] ?>[]" value="<?= $value ?>" <?= $field['field_required'] == '1' ? 'required' : '' ?>  <?= $field['value'] == $value ? 'checked="checked"' : empty($field['value']) && $field['field_default'] == $value ? 'checked="checked"' : '' ?> />
        <span>
            <?= $key ?>
        </span>
    </label>
<?php endforeach; ?>